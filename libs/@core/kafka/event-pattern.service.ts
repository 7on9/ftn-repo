import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ClassToTopicMap, buildTopic, getTopicForInstance } from './topics'
import { TopicType } from './topic.types'

/**
 * Centralized event pattern constants to maintain consistency across modules
 */
export enum EventPatternTypes {
	COMMAND = 'command',
	EVENT = 'event',
	QUERY = 'query',
}

/**
 * Service for generating standardized Kafka topic patterns
 */
@Injectable()
export class EventPatternService {
	private readonly appPrefix: string

	constructor(private configService: ConfigService) {
		this.appPrefix = this.configService.get<string>('KAFKA_TOPIC_PREFIX', 'ftn')
	}

	/**
	 * Get a standardized topic pattern
	 * @param type The type of message pattern
	 * @param entityName The entity or domain model name
	 * @param action Specific action (optional)
	 * @returns Formatted topic string
	 */
	getTopicPattern(type: EventPatternTypes | string, entityName: string, action?: string): string {
		const topicType = this.mapEventPatternTypeToTopicType(type)
		const normalizedEntityName = this.normalizeEntityName(entityName)
		const normalizedAction = action || 'default'

		return buildTopic(this.appPrefix, topicType, normalizedEntityName, normalizedAction)
	}

	/**
	 * Get topic pattern for command
	 * @param commandName The command class name
	 * @returns Formatted topic string
	 */
	getCommandPattern(commandName: string): string {
		// First check if we have a predefined mapping
		if (ClassToTopicMap[commandName]) {
			return ClassToTopicMap[commandName]
		}

		// If not, generate one using the pattern
		return this.getTopicPattern(EventPatternTypes.COMMAND, commandName)
	}

	/**
	 * Get topic pattern for event
	 * @param eventName The event class name
	 * @returns Formatted topic string
	 */
	getEventPattern(eventName: string): string {
		// First check if we have a predefined mapping
		if (ClassToTopicMap[eventName]) {
			return ClassToTopicMap[eventName]
		}

		// If not, generate one using the pattern
		return this.getTopicPattern(EventPatternTypes.EVENT, eventName)
	}

	/**
	 * Get topic pattern for query
	 * @param queryName The query class name
	 * @returns Formatted topic string
	 */
	getQueryPattern(queryName: string): string {
		// First check if we have a predefined mapping
		if (ClassToTopicMap[queryName]) {
			return ClassToTopicMap[queryName]
		}

		// If not, generate one using the pattern
		return this.getTopicPattern(EventPatternTypes.QUERY, queryName)
	}

	/**
	 * For a given class instance, get appropriate topic pattern
	 * @param object The event/command/query instance
	 * @returns Appropriate topic pattern
	 */
	getPatternForObject(object: any): string {
		// First check if we have a predefined mapping for this class
		const predefinedTopic = getTopicForInstance(object)
		if (predefinedTopic) {
			return predefinedTopic
		}

		const { constructor } = Object.getPrototypeOf(object)
		const className = constructor.name

		if (className.endsWith('Command')) {
			return this.getCommandPattern(className)
		} else if (className.endsWith('Event')) {
			return this.getEventPattern(className)
		} else if (className.endsWith('Query')) {
			return this.getQueryPattern(className)
		}

		// Default to event pattern if type can't be determined
		return this.getEventPattern(className)
	}

	/**
	 * Normalize entity name for consistency in topic patterns
	 */
	private normalizeEntityName(name: string): string {
		// Remove Command, Event, Query suffixes
		name = name
			.replace(/Command$/, '')
			.replace(/Event$/, '')
			.replace(/Query$/, '')

		// Convert CamelCase to kebab-case, then to lowercase
		return name
			.replace(/([a-z])([A-Z])/g, '$1-$2')
			.toLowerCase()
			.replace(/-/g, '.')
	}

	/**
	 * Map EventPatternTypes to TopicType enum
	 */
	private mapEventPatternTypeToTopicType(type: EventPatternTypes | string): TopicType | string {
		switch (type) {
			case EventPatternTypes.COMMAND:
				return TopicType.COMMANDS
			case EventPatternTypes.EVENT:
				return TopicType.EVENTS
			case EventPatternTypes.QUERY:
				return TopicType.QUERIES
			default:
				return type.toString()
		}
	}
}

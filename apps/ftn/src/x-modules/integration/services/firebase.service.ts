// import { Injectable } from '@nestjs/common';
// import { configEnv } from '~/@config/env';
// import FcmAdmin from 'firebase-admin';
// import { Message } from 'firebase-admin/lib/messaging/messaging-api';
// import { NotificationDto, PushResult } from '~/dto/notification.dto';
// import { MemberEntity } from '~/entities/primary';
// import { In } from 'typeorm';
// import { BindRepo } from '~/@core/decorator';
// import { DeviceRepo, DeviceMemberRepo } from '~/repositories/primary';

// @Injectable()
// export class FirebaseService {
//   constructor() {}

//   @BindRepo(DeviceRepo)
//   private deviceRepo: DeviceRepo;

//   @BindRepo(DeviceMemberRepo)
//   private deviceMemberRepo: DeviceMemberRepo;

//   async sendNotification(title: string, body: string, token: string) {
//     try {
//       const message: Message = {
//         notification: {
//           title,
//           body,
//         },
//         token,
//       };
//       const response = await FcmAdmin.messaging().send(message);
//       // console.log('Successfully sent message:', response);
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   }
//   async pushSingleNotification(notificationDto: NotificationDto, token: string): Promise<string> {
//     const result = await FcmAdmin.messaging().send({
//       token,
//       notification: {
//         body: notificationDto?.body,
//         imageUrl: notificationDto?.imageUrl,
//         title: notificationDto?.title,
//       },
//       data: notificationDto?.data,
//     });
//     return result;
//   }
//   async pushMultipleNotification(
//     notificationDto: NotificationDto,
//     tokens: string[],
//   ): Promise<PushResult> {
//     const bathResponse = await FcmAdmin.messaging().sendEachForMulticast({
//       tokens,
//       notification: {
//         body: notificationDto?.body,
//         imageUrl: notificationDto?.imageUrl,
//         title: notificationDto?.title,
//       },
//       data: notificationDto?.data,
//     });
//     // console.log(`-----------bathResponse--------`);
//     // console.log(bathResponse.responses.map(v => v.error));
//     // console.log(`-------------------`);
//     const result = new PushResult();
//     result.failureCount = bathResponse.failureCount;
//     result.successCount = bathResponse.successCount;
//     return result;
//   }
//   async pushNotificationByMember(memberId: string, body: NotificationDto) {
//     const devicesMember = await this.deviceMemberRepo.find({
//       select: ['deviceId'],
//       where: {
//         memberId,
//       },
//     });
//     if (devicesMember?.length === 0) {
//       return new PushResult();
//     }
//     const devices = await this.deviceRepo.find({
//       select: ['fcmToken'],
//       where: {
//         id: In(devicesMember.map(v => v.deviceId)),
//       },
//     });
//     const tokens = devices.map(v => v.fcmToken).filter(v => v);
//     if (tokens?.length === 0) {
//       return new PushResult();
//     }
//     return this.pushMultipleNotification(body, tokens);
//   }
// }

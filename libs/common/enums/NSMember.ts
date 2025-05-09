export namespace NSMember {
  export enum EAddressType {
    Home = 'HOME',
    Company = 'COMPANY',
  }
  export enum EMembershipType {
    Personal = 'PERSONAL',
    Enterprise = 'ENTERPRISE',
  }
  export enum EMemberType {
    Member = 'MEMBER',
    Collaborator = 'COLLABORATOR',
  }

  export enum EStatus {
    Inactive = 'INACTIVE',
    Active = 'ACTIVE',
    WaitingForVerify = 'WAITING_FOR_VERIFY',
    Deleted = 'DELETED',
    WaitingForApprove = 'WAITING_FOR_APPROVE',
  }
}

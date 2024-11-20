export interface GameInfo {
    gameUrl: string;
    permissionList: GamePermission[];
  }
  

export interface GamePermission {
    identity: string;
    permissions: string[];
  }

export interface GameStateContent {

}

export interface UserInformation {
  sub: string | null;
  email_verified: boolean;
  name: string | null;
  preferred_username: string | null;
  given_name: string | null;
  family_name: string | null;
  email: string | null;
}
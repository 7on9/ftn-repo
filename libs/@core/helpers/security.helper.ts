import * as bcrypt from 'bcrypt';
const saltRounds = 10;
export class SecurityHelper {
  hash = (payload: string): Promise<string> => {
    return bcrypt.hash(payload, saltRounds);
  };
  compare = (payload: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(payload, hash);
  };
}

export default new SecurityHelper();

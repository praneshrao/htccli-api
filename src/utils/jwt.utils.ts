import jwt from "jsonwebtoken";
import config from "config";
import fs from "fs"

export function signJwt(
  object: Object,
  keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
  options?: jwt.SignOptions | undefined
) {

 //const signingKey = config.get<string>(keyName);
/*    let signingKey: any = ""
  if (keyName == "accessTokenPrivateKey") {
     signingKey = fs.readFileSync("./certs/private.pem")
  } else {
    signingKey = fs.readFileSync("./certs/private_refresh.pem")
  }  */
  //console.log("Private Key - ", config.get<string>(keyName));

  const signingKey = Buffer.from(config.get<string>(keyName),"base64").toString("ascii");
  
  return jwt.sign(object, signingKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(
  token: string,
  keyName: "accessTokenPublicKey" | "refreshTokenPublicKey"
) {

//const publicKey = config.get<string>(keyName);
/*   let publicKey: any = ""
  if (keyName == "accessTokenPublicKey") {
    publicKey = fs.readFileSync("./certs/private.pem")
 } else {
  publicKey = fs.readFileSync("./certs/private_refresh.pem")
 }  */
 const publicKey = Buffer.from(config.get<string>(keyName), "base64").toString(
  "ascii"
);

  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    console.error(e);
    return {
      valid: false,
      expired: e.message === "jwt expired ",
      decoded: null,
    };
  }
}
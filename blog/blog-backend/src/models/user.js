import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt'; // 해시 생성
import jwt from 'jsonwebtoken'; // jwt 토큰

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

// 인스턴스 메서드를 작성할 때는 화살표 함수가 아닌 function 키워를 사용해 구현해야 함: 함수 내부에서 this에 접근해야 하기 때문
// cf. 화살표 함수를 사용하면 this로 문서 인스턴스를 가리키지 못한다

UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // true/false
};

// username으로 데이터 찾기
UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username }); // true/false
};

// 결과 값에 password가 보이지 않도록 설정
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    // 첫 번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣는다
    {
      _id: this.id,
      username: this.username,
    },

    // 두 번째 파라미터에는 JWT 암호를 넣는다
    process.env.JWT_SECRET,
    {
      expiresIn: '7d', // 7일동안 유효
    },
  );
  return token;
};

const User = mongoose.model('User', UserSchema);
export default User;

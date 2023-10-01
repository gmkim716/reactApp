import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt'; // 해시 생성

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

const User = mongoose.model('User', userSchema);
export default User;

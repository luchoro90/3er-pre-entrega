class UserDTO {
  constructor({ first_name, last_name, age }) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }

  static createSubset(user, properties) {
    const subset = {};
    let userMongo = user._doc ? user._doc : user
    for (const property of properties) {
      if (userMongo.hasOwnProperty(property)) {
        subset[property] = user[property]
      }
    }
    return new UserDTO(subset);
  }
}

module.exports = UserDTO

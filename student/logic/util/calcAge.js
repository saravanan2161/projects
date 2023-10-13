const calcAge = async (date) => {
  const birthdate = new Date(date);
  const today = new Date();
  const age = await today.getFullYear() - birthdate.getFullYear() -
    (today.getMonth() < birthdate.getMonth() ||
      (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
  return age;
}

module.exports = { calcAge };
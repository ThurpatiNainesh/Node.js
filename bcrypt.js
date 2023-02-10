





const convertedPassword = bcrypt.hashSync(password, saltRounds);
        data.password = convertedPassword
        
const userEmail = await userModel.findOne({ email: email })
   if (!userEmail) { return res.status(401).send({ status: false, message: "Invalid Email" }) }
    let hashedPassword = userEmail.password
    let userPassword = bcrypt.compareSync(password, hashedPassword)
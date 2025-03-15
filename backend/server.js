const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 3000

const mongoURI = 'mongodb://127.0.0.1:27017/mywebsite'

console.log('Server starting...');

mongoose.connect(mongoURI)
    .then(() => console.log('Kết nối MongoDB thành công!'))
    .catch(err => console.error('Kết nối MongoDB thất bại:', err))


const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
})

const User = mongoose.model('User', userSchema)

mongoose.connection.on('error', err => {
    console.error('Lỗi kết nối mongoose:', err)
})


app.use(express.static(path.join(__dirname, '../frontend')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/home/home.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/account/login.html'))
})

app.post('/login', (req, res) => {
    const { username, password } = req.body

    // Tìm người dùng trong cơ sở dữ liệu MongoDB
    User.findOne({ username, password })
        .then(user => {
            if (user) {
                // Nếu tìm thấy user, đăng nhập thành công
                res.json({ message: 'Đăng nhập thành công!', ok: true })
            } else {
                // Nếu không tìm thấy user, thông báo lỗi
                res.json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng!', ok: false })
            }
        })
        .catch(err => {
            console.error('Lỗi khi đăng nhập:', err)
            res.status(500).json({ message: 'Có lỗi xảy ra!', ok: false })
        })
})


app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/account/register.html'))
})

app.post('/register', (req, res) => {
    const { username, password, confirmPassword } = req.body

    if (!username) {
        return res.json({ message: 'Username là bắt buộc!', ok: false })
    }

    if (password !== confirmPassword) {
        return res.json({ message: 'Mật khẩu không khớp!', ok: false })
    }

    User.create({ username, password })
        .then(user => res.json({ message: 'Đăng ký thành công!', ok: true, user }))
        .catch(err => {
            console.error("Lỗi khi tạo tài khoản:", err)
            res.json({ message: 'Lỗi khi tạo tài khoản!', ok: false, err })
        })
})

app.get('/changepassword', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/account/changePassword.html'))
})

app.post('/changepassword', (req, res) => {
    const { username, password, newPassword, confirmNewPassword } = req.body

    if (newPassword !== confirmNewPassword) {
        return res.json({ message: 'Mật khẩu mới không khớp!', ok: false })
    }

    User.findOneAndUpdate({ username, password }, { password: newPassword })
        .then(user => {
            if (user) {
                res.json({ message: 'Đổi mật khẩu thành công!', ok: true })
            } else {
                res.json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng!', ok: false })
            }
        })
        .catch(err => {
            console.error('Lỗi khi đổi mật khẩu:', err)
            res.json({ message: 'Có lỗi xảy ra!', ok: false })
        })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
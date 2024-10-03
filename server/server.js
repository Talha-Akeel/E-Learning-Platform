const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connect_database = require("./db/config");
const express_formidable = require("express-formidable");

const user_router = require("./routes/users_route");
const course_router = require("./routes/course_route");
const category_router = require("./routes/category_route");
const lecture_router = require("./routes/lecture_route");
const comment_router = require("./routes/comment_route");
const comment_reply_router = require("./routes/comment_reply_route");
const enrollment_router = require("./routes/enrollment_route");

dotenv.config();

const port = process.env.PORT;

app.use(express_formidable());
app.use(cors());

app.use('/api/v1/users', user_router);
app.use('/api/v1/courses', course_router);
app.use('/api/v1/categories', category_router);
app.use('/api/v1/lectures', lecture_router);
app.use('/api/v1/comments', comment_router);
app.use('/api/v1/comment-reply', comment_reply_router);
app.use('/api/v1/enrollments', enrollment_router);

app.listen(port, () => {
    console.log(`Server has started at PORT:${port}`);
    connect_database();
});
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// 引入handlebars
app.engine('handlebars', exphbs({defaultLayout : 'main'}))
app.set('view engine', 'handlebars')

// 設定靜態資料來源
app.use(express.static('public'))

// 設定靜態路由
app.get('/',(req, res) => {
  res.render('index')
})

// 設定動態路由
app.get('/:page',(req,res) => {
  console.log(req.params.page)
  const page = req.params.page
  res.render('show',{page:page})
})

app.listen(port,() => {
  console.log(`This is page created on http://localhost:${port}.`)
})

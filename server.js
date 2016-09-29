var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    articleone:{
         title:'ARTICLE ONE | YASH MITTAL',
         heading:'ARTICLE-ONE',
         date:'sep 28,2016',
         content: `<p>
                This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
            </p>
            <p>
                This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
            </p>
            <p>
                This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
            </p>`
    },
    articletwo:{
        title:'ARTICLE TWO | YASH MITTAL',
    heading:'ARTICLE-TWO',
    date:'sep 28,2016',
    content: `<p>
                This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.
                </p>
                <p>
                This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.
                </p>
                <p>
                This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.
                </p>`
    },
    articlethree:{
        title:'ARTICLE THREE | YASH MITTAL',
    heading:'ARTICLE-THREE',
    date:'sep 28,2016',
    content: `<p>
                This is article three.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.
                <p>
                This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.
                </p>
                <p>
                This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.This is article two.
                </p>`
    },
};

function createtemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var template=
`<html>
    <head>
    
        <meta name="viewport" content="width=device-width" ,initial-scale="1"/>
        <link href="/ui/styles.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="container">
        <div>
        <a href="/">HOME</a>
        </div>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
    
</html>`
;
return htmltemplate;    

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleone',function(req,res)
{var articleName=req.params.articleName;
 res.send(createtemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

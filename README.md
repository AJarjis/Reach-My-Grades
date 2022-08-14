[![Netlify Status](https://api.netlify.com/api/v1/badges/de7deca9-5a09-4871-85da-961238e9c17d/deploy-status)](https://app.netlify.com/sites/reachmygrades/deploys)

# Portfolio
A tutoring site built for a client.

## Live Demo
https://www.reachmygrades.com/

## Local Development
### Required Tools
- [Jekyll](https://jekyllrb.com/)

### Install Dependencies
```bash
$> bundle install
```

### Running Site Locally
```bash
$> jekyll serve
```
The site will be available at: http://127.0.0.1:4000/

### Running CMS Locally
This site uses a CMS to obtain its contents. To run a CMS ([Netlify](https://www.netlifycms.org/)) locally run the following in a seperate terminal:
```bash
$> npx netlify-cms-proxy-server
```

Then while the site is running, visit:
http://127.0.0.1:4000/admin

Here you can add, edit or delete the site's content.



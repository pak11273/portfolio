## surge deployment:

- replace build script with "build": "react-scripts build && cp build/index.html build/200.html"
- yarn build && cd build
- surge
- echo url (eg. determined-leg.surge.sh) > CNAME
- surge ./

## add custom domain:

- set hostname na-west1.surge.sh on domain registar(eg. namecheap)
  - ref: https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/
  - ref: https://surge.sh/help/remembering-a-domain

## animation scrolling refs:

- https://www.kirupa.com/animations/creating_scroll_activated_animations.htm

## continuous integration

- make changes
- git add and cm and push
- in root do: yarn deploy
- cd build
- surge ./

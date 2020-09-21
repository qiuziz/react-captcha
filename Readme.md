# # react-captcha

##### 验证码组件

### How to use

```
npm install react-captcha-qiuz --save-dev
```
```
<Captcha
    length={4}
    height="40"
    width="150"
    style={{backgorund: '#fff'}}
    codes={[1,2,3,4,5,6,7,8,9,0]}
    onChange={code => {console.log(code)}}/>
```


1. 定义变量：$axax : 16px; font-size : $axax*2;
2. 变量嵌套：$side : left; border-#{$side} : $axax;
3. 属性嵌套：border: {width: 20px} => border-width: 20px
4. 引用父元素：&:hover {...}
5. 注释：//会删、/*~~不删~~*/、/*！不删*/
6. 继承：%class1{...}、.class2{@extend .class1;}
7. 插入文件：@import "path/filename.scss";

8. @mixin 函数变量名（参数: 缺省值）{
    具体的函数
}
   @include 函数变量名（具体参数）
**相对于继承、不会产生DRY式代码：div,p{}**

8. 循环、自定义函数、
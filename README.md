# 什么是 lazy-assert

无论我们多么誓言旦旦要写足够完善的测试, 我们都要直面惨淡的人生, 那就是 "测试并不好写". 这种惨烈的状态在弱类型语言里更甚, 以至于我们常常在面对很多的边际用例时, 要花几分钟思考一下人生, 梳理一下我们的三观, 说很多的话来说服自己, 最后才能鼓起勇气在编辑器里键入 `describe ...`.

![face palm](./asset/img/face-palm.jpeg)

## 测试为何那么烦人

让我们来反思一下, 写测试本身为什么很痛苦. 下面是几个主要的点:

- 大多数场景下, 我们是按照 "前置预期" 的方式来写测试.
- 遇到复杂类型或场景时, 单一个测试, 就得写很多的测试判断语句.
- 使用每一个 assert 库前, 都必须对其 api 进行上手熟悉.

### 前置预期

前置预期的最大特点就是: 写测试时, 你必须提前准备好 "环境", "输入" 和 "输出", 并把相应的判断语句写好.

沿用 TDD 的模式, 大多测试都是以 "前置预期" 的思路去写. 比如说有如下的方法:

```
function processSomething(input) { 
    // 做些逻辑判断和操作
    return output
}
``` 

比如, 我们会产出以下的测试:

```
// using chai.should()
processSomething( input ).should.deep.equal( output );
```

看起来很美好吧, 实际上, 在写测试时, 我们会经过以下丰富的内心活动:

```
processSomething(  I<光标所在位置>
```

思考一下...

```
// using chai.should()
processSomething( input ).should. I<光标所在位置>
```

![img](./asset/img/thinking.jpeg)

来, 人肉算一算是什么结果... 

好繁琐啊... 偷偷打印一下结果 `console.log( processSomething(input) )`

Finally...

```
processSomething( input ).should.deep.equal( output );
```
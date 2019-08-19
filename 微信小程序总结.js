
冒泡事件（子类元素触发之后会向上冒泡）
点击事件：tap

长按事件：longtap

触摸事件：touchstart； touchend；touchcancel；touchmove


微信开发者工具中的显示效果和手机预览的效果不一致，查询好多文档后发现是下面两个原因导致的
1.video，camera，canvas，map,live-player,live-pusher,textarea,input(这个只在focus的时候才是原生组件)
等由手机自带的原生组件的z-index是无法被更改的，且层级为最顶级；查询好多资料，以及各种尝试，最终发现只有一种办法覆盖原生控件：
使用微信自带的cover-view，cover-image组件
2.原生组件无法设置css动画，position设置为fixed无效，不能在父节点中使用over-flow：hidden来裁剪原生组件的显示区域
3.原生组件的事件监听只能使用bindeventname，不能使用bind:eventname;同时不支持catch和capture的事件绑定方式
var posts=["2023/04/24/aplayer+meting的妙用/","2022/04/03/css基础/","2022/04/20/2023考研数二资料分享/","2024/01/09/[技术分享] 非常手段CNAME接入任何域名到CF/","2023/02/16/2023每天60秒读懂世界_实时更新/","2022/04/03/html笔记/","2022/03/27/学习通安装网课帮手脚本教程/","2022/04/03/java笔记/","2022/04/14/视频解析/","2023/02/15/关于某云音乐解灰工具的初体验/","2024/01/16/无IPV6环境搭建纯IPV6的服务器节点/","2022/03/28/第一篇文/","2023/04/23/给自己一次机会/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
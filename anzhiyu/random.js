var posts=["2023/08/02/【C++】Virtual functions  Pure virtual functions/","2023/08/01/【C++】lambda：匿名函数的用法/","2023/08/05/【C++】智能指针（Smart Pointer）/","2023/08/04/【C++】高频问题（继承、多态）/","2023/08/03/【C++】高频问题（C和C+的区别）/","2023/10/28/【CodeSys】移植Runtime/","2023/10/29/【CodeSys】适配串口驱动/","2023/08/12/【Life】仙英座流星雨/","2023/10/30/【CodeSys】添加自己代码库/","2022/12/31/【Life】元旦の黄山/","2023/05/01/【Life】51劳动节の上海/","2023/02/04/【Life】十五拆弹/","2023/04/29/【Life】51劳动节の千岛湖/","2023/10/21/【Life】周末の青山湖/","2023/03/17/【Life】扬州三日游/","2023/07/20/【Life】此刻心情/","2023/06/01/【Life】逆子十五(1)/","2023/05/27/【Life】周末の莫干山/","2023/06/02/【Life】逆子十五(2)/","2023/11/02/【Linux】Platform设备驱动/","2023/09/01/【Linux】VsCode使用CMake配置C++环境/","2023/09/02/【Linux】多线程喂狗/","2023/11/01/【Linux】Pinctrl和GPIO子系统/","2023/09/07/【Linux】新字符设备驱动/","2023/09/05/【Linux】GDB调试/","2023/09/08/【Linux】设备树/","2023/10/02/【RK3568】U-BOOT启动流程/","2023/10/01/【RK3568】Buildroot开发/","2023/09/04/【Linux】线程进程/","2023/09/03/【Linux】高频问题linux系统/","2023/10/03/【RK3568】U盘锁/","2023/10/06/【RK3568】使用MMP采集USB摄像头数据/","2023/10/04/【RK3568】采集并保存USB音频/","2023/10/05/【RK3568】采集并存储USB摄像头视频流/","2023/10/23/【Tool】Static Analysis Tool (CppCheck)/","2023/10/24/【Tool】clang-format代码格式化工具/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
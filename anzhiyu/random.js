var posts=["blog/cPulsVirtualFun/","blog/cPulsSmartPointer/","blog/cPulsLambda/","blog/cPulsPolymorphic/","blog/CodesysAddMyLib/","blog/cPuls&c/","blog/CodesysRuntime/","blog/CodesysAdaptSerial/","blog/230429/","blog/230812/","blog/230501/","blog/221231/","blog/230527/","blog/231021/","blog/230204/","blog/230307/","blog/230601/","blog/230602/","blog/LinuxGDB/","blog/LinuxPinctrl&Gpio/","blog/LinuxPlatform&DevTrees/","blog/LinuxCplusConfig/","blog/LinuxPlatformDevDri/","blog/LinuxDog/","blog/LinuxCharDevise/","blog/LinuxDevTree/","blog/LinuxThread/","blog/LinuxSysQues/","blog/Rk3568Buildroot/","blog/Rk3568Upan/","blog/Rk3568Uboot/","blog/Rk3568SaveWav/","blog/Rk3568MppSaveVideo/","blog/Rk3568SaveVideo/","blog/ToolCppCheck/","blog/ToolClangFormat/","blog/MyProject1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["blog/cPulsVirtualFun/","blog/cPulsLambda/","blog/cPuls&c/","blog/cPulsSmartPointer/","blog/cPulsPolymorphic/","blog/CodesysAddMyLib/","blog/CodesysRuntime/","blog/230501/","blog/CodesysAdaptSerial/","blog/230812/","blog/230429/","blog/230204/","blog/221231/","blog/231021/","blog/230527/","blog/230601/","blog/230307/","blog/230602/","blog/LinuxInput/","blog/LinuxGDB/","blog/LinuxMiscDevDri/","blog/LinuxPlatformDevDri/","blog/LinuxPlatform&DevTrees/","blog/LinuxPinctrl&Gpio/","blog/LinuxDog/","blog/LinuxCharDevise/","blog/LinuxDevTree/","blog/LinuxSysQues/","blog/LinuxThread/","blog/LinuxCplusConfig/","blog/Rk3568MppSaveVideo/","blog/Rk3568Upan/","blog/Rk3568SaveWav/","blog/Rk3568SaveVideo/","blog/Rk3568Buildroot/","blog/ToolCppCheck/","blog/MyProject1/","blog/Rk3568Uboot/","blog/ToolClangFormat/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
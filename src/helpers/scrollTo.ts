
export const goToViolation=(id: any)=>{
    const violation = document.getElementById(id)!; 
    window.scrollTo({
      top:violation.offsetTop,
      behavior:"smooth"
  });
  };
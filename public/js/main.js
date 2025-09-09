// وظيفة الزر "ابدأ" إنه ينزل المستخدم للسيكشن اللي اسمه section1
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
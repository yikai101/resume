// 侧边菜单切换
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const menuLinks = sideMenu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('-translate-y-full');
});

// 点击菜单项后关闭菜单
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.add('-translate-y-full');
    });
});

// 平滑滚动
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 60,
            behavior: 'smooth'
        });
    }
};

// 为所有导航链接添加平滑滚动
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target);
    });
});

// 滚动动画
const animateOnScroll = () => {
    const elements = document.querySelectorAll('section');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-fade-in');
        }
    });
};

// 监听滚动事件
window.addEventListener('scroll', animateOnScroll);

// 表单提交处理
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 获取表单数据
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // 简单验证
        if (!name || !email || !message) {
            alert('请填写所有必填字段');
            return;
        }
        
        // 模拟表单提交
        alert('消息已发送！我们会尽快与您联系。');
        contactForm.reset();
    });
}

// 页面加载完成后初始化
window.addEventListener('load', () => {
    // 触发一次滚动动画检查
    animateOnScroll();
    
    // 添加加载动画
    document.body.classList.add('loaded');
});

// 添加CSS动画定义
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    
    @keyframes slideIn {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    section.animate-fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .loaded {
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);
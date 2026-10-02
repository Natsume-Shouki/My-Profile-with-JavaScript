// ခလုတ်နှိပ်သည့်အခါ အလုပ်လုပ်မည့် Function
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('welcomeBtn');

    if (btn) {
        btn.addEventListener('click', () => {
            alert('Thank You for Intersting To Me !');
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Page refresh မဖြစ်အောင် တားဆီးခြင်း
            
            const name = document.getElementById('name').value;
            alert(`Thank you ${name}! Message is Resived`);
            
            contactForm.reset(); // Form ကို ပြန်လည်ရှင်းလင်းခြင်း
        });
    }
});
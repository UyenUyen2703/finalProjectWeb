// Lấy tất cả các mục có class 'category-item'
const categoryItems = document.querySelectorAll('.category-item');

// Thêm sự kiện click cho mỗi mục
categoryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Xóa lớp 'active' khỏi tất cả các mục
        categoryItems.forEach(el => el.classList.remove('active'));
        // Thêm lớp 'active' vào mục được chọn
        this.classList.add('active');
    });
});
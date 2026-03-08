// --- TELEGRAM CONFIG ---
const botToken = "8552852037:AAEKRL2GVMAUwBrvQ4-pcnvR_JsR1A95YcQ";
const chatId = "8259649277"; 

// --- MODAL CONTROL ---
function openOrderModal() {
    document.getElementById('order-modal').style.display = 'flex';
}

function closeOrderModal() {
    document.getElementById('order-modal').style.display = 'none';
}

// --- SEND ORDER ---
document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('cust-name').value;
    const item = document.getElementById('cust-item').value;
    const address = document.getElementById('cust-address').value;

    const message = `🚀 NEW ZEOSS ORDER!\n\n👤 Customer: ${name}\n👕 Item: ${item}\n📍 Address: ${address}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url).then(response => {
        if(response.ok) {
            alert("Order received! Check your Telegram.");
            closeOrderModal();
        } else {
            alert("Error sending order. Check your Token/ID.");
        }
    });
});

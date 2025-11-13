function calculateSSCL() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (!amount || amount <= 0) {
    document.getElementById("output").innerHTML = "Please enter a valid amount.";
    return;
  }

  const saleTax = amount * 0.025;
  const vat = (amount + saleTax) * 0.15;
  const totalTax = saleTax + vat;
  const total = amount + totalTax;

  document.getElementById("output").innerHTML = `
    <strong>Results:</strong><br>
    Original Amount: Rs. ${amount.toFixed(2)}<br>
    Sale Tax (2.5%): Rs. ${saleTax.toFixed(2)}<br>
    VAT (15%): Rs. ${vat.toFixed(2)}<br>
    Final SSCL Value (Tax Total): Rs. ${totalTax.toFixed(2)}<br>
    <strong>Total Amount After Tax: Rs. ${total.toFixed(2)}</strong>
  `;
}
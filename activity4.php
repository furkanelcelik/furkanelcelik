<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Java Jam Coffee House</title>
    <meta name="description" content="CENG 311 Inclass Activity 1">
</head>
<body>
<?php
// Associative array part
$rates = array(
    'FUSD' => array('FCAD' => 1.35, 'FEUR' => 0.92, 'FUSD' => 1),
    'FCAD' => array('FUSD' => 0.74, 'FEUR' => 0.68, 'FCAD' => 1),
    'FEUR' => array('FUSD' => 1.09, 'FCAD' => 1.47, 'FEUR' => 1)
);

// convertion part
function convertCurrency($fromCurrency, $toCurrency, $amount, $rates) {
    if (isset($rates[$fromCurrency]) && isset($rates[$fromCurrency][$toCurrency])) {
        return $amount * $rates[$fromCurrency][$toCurrency];
    }
    return "Invalid conversion";
}

// Handling the errors at the start 
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $fromValue = isset($_GET['from_value']) ? $_GET['from_value'] : '';
    $fromCurrency = isset($_GET['from_currency']) ? $_GET['from_currency'] : '';
    $toCurrency = isset($_GET['to_currency']) ? $_GET['to_currency'] : '';

    if (!empty($fromValue) && !empty($fromCurrency) && !empty($toCurrency)) {
        $convertedValue = convertCurrency($fromCurrency, $toCurrency, $fromValue, $rates);
        echo "<p>Converted value: $convertedValue $toCurrency</p>";
    }
}
?>
<form action="activity4.php" method="GET">
    <table>
        <tr>
            <td>From:</td>
            <td><input type="text" name="from_value" value="<?php echo isset($fromValue) ? $fromValue : ''; ?>"></td>
            <td>Currency:</td>
            <td>
                <select name="from_currency">
                    <option value="FUSD" <?php echo isset($fromCurrency) && $fromCurrency == 'FUSD' ? 'selected' : ''; ?>>USD</option>
                    <option value="FCAD" <?php echo isset($fromCurrency) && $fromCurrency == 'FCAD' ? 'selected' : ''; ?>>CAD</option>
                    <option value="FEUR" <?php echo isset($fromCurrency) && $fromCurrency == 'FEUR' ? 'selected' : ''; ?>>EUR</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>To:</td>
            <td><input type="text" name="to_value" value="<?php echo isset($convertedValue) ? $convertedValue : ''; ?>" readonly></td>
            <td>Currency:</td>
            <td>
                <select name="to_currency">
                    <option value="FUSD" <?php echo isset($toCurrency) && $toCurrency == 'FUSD' ? 'selected' : ''; ?>>USD</option>
                    <option value="FCAD" <?php echo isset($toCurrency) && $toCurrency == 'FCAD' ? 'selected' : ''; ?>>CAD</option>
                    <option value="FEUR" <?php echo isset($toCurrency) && $toCurrency == 'FEUR' ? 'selected' : ''; ?>>EUR</option>
                </select>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <input type="submit" value="Convert">
            </td>
        </tr>
    </table>
</form>
</body>
</html>

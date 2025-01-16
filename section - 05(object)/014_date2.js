const now = new Date();

console.log("Current Date:", now);                  // Full date and time
console.log("Year:", now.getFullYear());           // Year (e.g., 2025)
console.log("Month:", now.getMonth());             // Month (0-11, January = 0)
console.log("Date:", now.getDate());               // Day of the month (1-31)
console.log("Day of the Week:", now.getDay());     // Day of the week (0-6, Sunday = 0)
console.log("Hours:", now.getHours());             // Hours (0-23)
console.log("Minutes:", now.getMinutes());         // Minutes (0-59)
console.log("Seconds:", now.getSeconds());         // Seconds (0-59)
console.log("Milliseconds:", now.getMilliseconds());// Milliseconds (0-999)
console.log("Time since Epoch:", now.getTime());   // Milliseconds since 1970-01-01
console.log("UTC String:", now.toUTCString());     // UTC time as a string
console.log("Locale String:", now.toLocaleString());// Local date and time as a string
console.log("ISO String:", now.toISOString());     // ISO 8601 format



//output
// 2025-01-16T13:43:54.212Z
// PS E:\mosh js\section -5(Objects)> node 014_date2.js
// Current Date: 2025-01-16T14:09:32.662Z
// Year: 2025
// Month: 0
// Date: 16
// Day of the Week: 4
// Hours: 19
// Minutes: 39
// Seconds: 32
// Milliseconds: 662
// Time since Epoch: 1737036572662
// UTC String: Thu, 16 Jan 2025 14:09:32 GMT
// Locale String: 16/1/2025, 7:39:32 pm
// ISO String: 2025-01-16T14:09:32.662Z
function getAgeGroup(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    if (yearOfBirth > 1901 && yearOfBirth <= 1927) {
        return "Greatest Generation (1901-1927)";
    } else if (yearOfBirth <= 1945) {
        return "Silent Generation (1928-1945)";
    } else if (yearOfBirth <= 1964) {
        return "Baby Boomers (1946-1964)";
    } else if (yearOfBirth <= 1980) {
        return "Generation X (1965-1980)";
    } else if (yearOfBirth <= 1996) {
        return "Millennials (1981-1996)";
    } else if (yearOfBirth <= 2010) {
        return "Generation Z (1997-2010)";
    } else if (yearOfBirth <= 2025) {
        return "Generation Alpha (2011-2024)";
    } else {
        return "Future Generation (2025 and beyond)";
    }
}

function displayAgeGroup() {
    const yearOfBirth = document.getElementById('age').value;
    const username = document.getElementById('username').value;
    if (yearOfBirth < 1901) {
        document.getElementById('result').innerText = 'Please Enter An Year of Birth Greater that 1901.';
    }
    else {
        const result = getAgeGroup(yearOfBirth);
        document.getElementById('result').innerText = 'Hi '+ username + `! You belong to: ${result}`;
    }
}

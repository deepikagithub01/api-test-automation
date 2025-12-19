function suggestTestCases(response) {
if (response.status === 200) {
return [
'Validate response schema',
'Check boundary values',
'Verify pagination'
]
}
return ['Add negative test cases']
}

module.exports = { suggestTestCases }

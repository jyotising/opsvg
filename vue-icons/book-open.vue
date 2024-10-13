
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M2.5 3.5H8C10.2092 3.5 12 5.29085 12 7.5V21C12 19.3432 10.6568 18 9 18H2.5V3.5Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M21.5 3.5H16C13.7908 3.5 12 5.29085 12 7.5V21C12 19.3432 13.3432 18 15 18H21.5V3.5Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'book-open',
      props: {
        width: {
          type: String,
          default: '24px'
        },
        height: {
          type: String,
          default: '24px'
        }
      }
    };
    </script>
  
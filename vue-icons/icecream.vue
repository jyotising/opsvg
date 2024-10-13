
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M16.5 9H7.5L10.5 20C10.5 20 11 21.5 12 21.5C13 21.5 13.5 20 13.5 20L16.5 9Z" stroke="#333333" strokeWidth="2"/>
	<path d="M18 9H6C6 5 8.5 2 12 2C15.5 2 18 5 18 9Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'icecream',
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
  
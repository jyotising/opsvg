
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 21C7.02945 21 3 16.9706 3 12C3 7.02945 7.02945 3 12 3" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02945 16.9706 3 12 3C12 3 10 4 10 7.5C10 11 14 13 14 16.5C14 20 12 21 12 21Z" stroke="#333333" strokeWidth="2"/>
	<path d="M21 10H22V14H21" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M3 10H2V14H3" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'chafing-dish',
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
  
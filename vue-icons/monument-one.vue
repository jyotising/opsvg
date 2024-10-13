
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M17 19H7V22H17V19Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M9 19L10 4.5L12 2L14 4.5L15 19H9Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M2 22H22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'monument-one',
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
  
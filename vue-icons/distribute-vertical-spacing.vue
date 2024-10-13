
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M2.5 4H21.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M2.5 20H21.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M17 10H7V14H17V10Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'distribute-vertical-spacing',
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
  
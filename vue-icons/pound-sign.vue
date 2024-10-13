
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M18 8.5H6" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M18 15.5H6" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M8.5 18V6" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M15.5 18V6" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'pound-sign',
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
  
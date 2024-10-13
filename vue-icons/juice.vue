
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M7.5 12H16.5L15.6 22H8.4L7.5 12Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M17 9H7C6.17157 9 5.5 9.67157 5.5 10.5C5.5 11.3284 6.17157 12 7 12H17C17.8284 12 18.5 11.3284 18.5 10.5C18.5 9.67157 17.8284 9 17 9Z" stroke="#333333" strokeWidth="2"/>
	<path d="M12 4C9.2386 4 7 6.2386 7 9H17C17 6.2386 14.7614 4 12 4Z" stroke="#333333" strokeWidth="2"/>
	<path d="M14 2L13 4" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'juice',
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
  
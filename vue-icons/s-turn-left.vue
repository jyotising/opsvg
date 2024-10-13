
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M21 19H6.50001C4.5 19 3 17.5 3 15.5C3 13.5 4.5 12 6.50001 12H9.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M9.5 12H17.5C19.5 12 21 10.5 21 8.5C21 6.5 19.5 5 17.5 5H8.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M18.5 21.5L21 19L18.5 16.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M6 2.5C4.61929 2.5 3.5 3.61929 3.5 5C3.5 6.38071 4.61929 7.5 6 7.5C7.38071 7.5 8.5 6.38071 8.5 5C8.5 3.61929 7.38071 2.5 6 2.5Z" stroke="#333333" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 's-turn-left',
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
  
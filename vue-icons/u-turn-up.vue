
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M6.5 7V16.5C6.5 19.5375 8.96245 22 12 22C15.0375 22 17.5 19.5375 17.5 16.5V2" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M15 4.5L17.5 2L20 4.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M9 4.5C9 3.11929 7.88071 2 6.5 2C5.11929 2 4 3.11929 4 4.5C4 5.88071 5.11929 7 6.5 7C7.88071 7 9 5.88071 9 4.5Z" stroke="#333333" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'u-turn-up',
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
  
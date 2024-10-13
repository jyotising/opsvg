
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M19.65 3H4.35C3.60441 3 3 3.60441 3 4.35V19.65C3 20.3956 3.60441 21 4.35 21H19.65C20.3956 21 21 20.3956 21 19.65V4.35C21 3.60441 20.3956 3 19.65 3Z" stroke="#333333" strokeWidth="2"/>
	<path d="M12 3V21" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'column',
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
  
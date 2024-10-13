
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M12.5 22C16.6421 22 20 18.6421 20 14.5C20 10.3579 16.6421 7 12.5 7C8.35786 7 5 10.3579 5 14.5C5 18.6421 8.35786 22 12.5 22Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M9 4L10.5 2H12.5669H14.5268L16 4L12.5 7L9 4Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'diamond-ring',
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
  
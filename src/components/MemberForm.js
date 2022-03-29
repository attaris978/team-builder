const MemberForm = (props) => {
    const handleSubmit = e => {
        console.log(e.target);
    }
  return (
      <form onSubmit={e => handleSubmit(e)}>
          <label>Name:
              <input
              name="mName"
              id="memberId"
              type="text"
              maxlength='30'
              placeholder="Team Member Name">
                  </input>
          </label>

      </form>
  )
};
export default MemberForm;

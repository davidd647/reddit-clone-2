import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const CommentForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.comment?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="upvotes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Upvotes
        </Label>
        <NumberField
          name="upvotes"
          defaultValue={props.comment?.upvotes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="upvotes" className="rw-field-error" />

        <Label
          name="downvotes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Downvotes
        </Label>
        <NumberField
          name="downvotes"
          defaultValue={props.comment?.downvotes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="downvotes" className="rw-field-error" />

        <Label
          name="createdBy"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created by
        </Label>
        <TextField
          name="createdBy"
          defaultValue={props.comment?.createdBy}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="createdBy" className="rw-field-error" />

        <Label
          name="parentPostId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Parent post id
        </Label>
        <NumberField
          name="parentPostId"
          defaultValue={props.comment?.parentPostId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="parentPostId" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>
        <TextField
          name="body"
          defaultValue={props.comment?.body}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="body" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CommentForm

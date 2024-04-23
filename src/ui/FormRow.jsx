import React from "react";

function FormRow() {
  <FormRow>
    <Label htmlFor="name">Cabin name</Label>
    <Input
      type="text"
      id="name"
      {...register("name", {
        required: "This field is required",
        min: {
          value: 1,
        },
      })}
    />
    {errors?.name?.message && <Error>{errors.name.message}</Error>}
  </FormRow>;
}

export default FormRow;

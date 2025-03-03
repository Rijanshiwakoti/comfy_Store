import { Form, useLoaderData, Link } from "react-router-dom";
import InputField from "./InputField";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta } = useLoaderData();
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 ld:grid-cols-4 items-center">
      <InputField
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />
      {/* categories */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
      />
      {/* company */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />
      {/* order*/}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
      />
      {/* price */}
      <FormRange label="select price" name="price" size="range-sm" />
      {/* shipping */}
      <FormCheckbox label="free shipping" name="shipping" size="checkbox-sm" />
      {/* buttons */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;

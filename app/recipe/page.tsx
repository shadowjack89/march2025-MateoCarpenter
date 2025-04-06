import { title } from "@/components/primitives";

export default function RecipePage() {
  return (
    <div>
      <div className="text-center">
        {" "}
        <h1 className={title()}>Recipes</h1>
      </div>
      <div className="space-y-1 text-blue-200">
        <p>1. How to make a PB-J Sandwich</p>
        <p>
          2. First, get the ingredients needed. Gather a 2 slices of bread, any
          form of peanutbutter, and a type of jelly.
        </p>
        <p>3. Next, Grab a knife or a spreading tool.</p>
        <p>
          4. Spread peanutbutter on one of the slices. Make sure it is all over
          only one face of the slice.
        </p>
        <p>
          5. Do the same with the jelly on the other slice. Spread evenly on one
          face of the slice.
        </p>
        <p>
          6. Now put the slices of bread together with the sides that have the
          Jelly/Peanutbutter on them. You now have a peanutbutter sandwich.
        </p>
        <img
          alt="pbj sandwich"
          src="https://livenaturallymagazine.com/wp-content/uploads/2016/01/pg-22-shutterstock_172741412.jpg"
          width="300"
        />
      </div>
      <div className="text-blue-200">
        <p>1. How to make ice</p>
        <p>2. Get water, preferably fresh water.</p>
        <p>
          3. Make water reach below 0 degrees celsius or 32 degrees farenheit.{" "}
        </p>
        <p>4. Enjoy🙌</p>
        <img
          alt="ice"
          src="https://cdn.britannica.com/53/157453-050-2D17B555/Ice-cubes-heat-temperature-rises-melting-ice.jpg"
          width="300"
        />
      </div>
    </div>
  );
}

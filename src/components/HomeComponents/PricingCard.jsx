

const PricingCard = () => {
    return (
        <div>
            <section className="py-20">
                <div className="container">
                    <h1>Pricing</h1>
                    <div className="row">
                        <div className="w-full sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12  ">
                            <div className="px-12 py-20 rounded-lg border border-yellow-300 ">
                                <h3 className="text-center text-xl text-orange-600">Monthly heading</h3>
                                <div className="text-center my-2">
                                    <span>$</span>
                                    <span>100</span>
                                </div>
                            </div> 
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default PricingCard
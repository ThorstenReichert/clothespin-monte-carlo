// step-function.cc

#include <node.h>
#include <algorithm>
#include <vector>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

namespace step {

    using v8::Exception;
    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::Array;
    using v8::Number;
    using v8::Object;
    using v8::String;
    using v8::Value;

    void Step(const FunctionCallbackInfo<Value>& args) {
        Isolate* isolate = args.GetIsolate();

        if (args.Length() != 3) {
            isolate->ThrowException(Exception::TypeError(
                String::NewFromUtf8(isolate, "Wrong number of arguments")
            ));
            return;
        }

        if (!args[0]->IsNumber() || !args[1]->IsNumber() || !args[2]->IsNumber()) {
            isolate->ThrowException(Exception::TypeError(
                String::NewFromUtf8(isolate, "Wrong types of arguments")
            ));
            return;
        }

        // Parse arguments 
        // - arg[0]: length of line 
        // - arg[1]: half-width of pins 
        // - arg[2]: number of pins

        double length   = args[0]->NumberValue();
        double width    = args[1]->NumberValue();
        int pins        = static_cast<int>(args[2]->NumberValue());

        if (length < 2.0 * width * pins) {
            isolate->ThrowException(Exception::Error(
                String::NewFromUtf8(isolate, "Total pin width exceeds line width")
            ));
            return;
        }

        // Calculate pin positions from random data

        std::vector<double> positions(pins);

        for (std::vector<double>::iterator it = positions.begin(); it != positions.end(); ++it) {
            double r = static_cast<double>(std::rand()) / RAND_MAX;
            *it = 0.0 + r * (length - (2.0 * pins * width));
        }

        std::sort(positions.begin(), positions.end());

        for (int i = 0; i < positions.size(); ++i) {
            positions[i] = positions[i] + (2.0 * i + 1.0) * width;
        }

        // Assemble return values in Array

        Local<Array> result = Array::New(isolate);
        for (int i = 0; i < positions.size(); ++i) {
            result->Set(i, Number::New(isolate, positions[i]));
        }

        args.GetReturnValue().Set(result);
    }

    void Init(Local<Object> exports, Local<Object> module) {
        std::srand(static_cast<unsigned int>(time(NULL)));
        NODE_SET_METHOD(exports, "step", Step);
    }

    NODE_MODULE(stepfunction, Init)

} // namespace step
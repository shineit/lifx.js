
generate-descriptor:
	protoc --descriptor_set_out=./protobuf/lifx.desc protobuf/lifx.proto
